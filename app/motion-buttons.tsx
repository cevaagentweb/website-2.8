"use client";

import { useEffect } from "react";

export default function MotionButtons() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
    const dragState: {
      active: null | {
        element: HTMLElement;
        pointerId: number;
        startPointerX: number;
        startPointerY: number;
        startX: number;
        startY: number;
      };
      moved: boolean;
    } = { active: null, moved: false };

    const onPointerMove = (event: PointerEvent) => {
      const item = event.currentTarget as HTMLElement;
      if (dragState.active?.element === item) {
        const nextX = dragState.active.startX + event.clientX - dragState.active.startPointerX;
        const nextY = dragState.active.startY + event.clientY - dragState.active.startPointerY;
        if (Math.abs(nextX - dragState.active.startX) + Math.abs(nextY - dragState.active.startY) > 4) {
          dragState.moved = true;
        }
        item.dataset.dragX = `${nextX}`;
        item.dataset.dragY = `${nextY}`;
        item.style.setProperty("--drag-x", `${nextX}px`);
        item.style.setProperty("--drag-y", `${nextY}px`);
        return;
      }

      if (item.classList.contains("dragging")) return;
      const rect = item.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
      item.style.setProperty("--move-x", `${x.toFixed(2)}px`);
      item.style.setProperty("--move-y", `${y.toFixed(2)}px`);
    };

    const onPointerLeave = (event: PointerEvent) => {
      const item = event.currentTarget as HTMLElement;
      if (item.classList.contains("dragging")) return;
      item.style.setProperty("--move-x", "0px");
      item.style.setProperty("--move-y", "0px");
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!event.shiftKey) return;
      event.preventDefault();
      const item = event.currentTarget as HTMLElement;
      item.setPointerCapture(event.pointerId);
      dragState.active = {
        element: item,
        pointerId: event.pointerId,
        startPointerX: event.clientX,
        startPointerY: event.clientY,
        startX: Number(item.dataset.dragX || 0),
        startY: Number(item.dataset.dragY || 0),
      };
      dragState.moved = false;
      item.classList.add("dragging");
    };

    const onPointerUp = (event: PointerEvent) => {
      const item = event.currentTarget as HTMLElement;
      if (dragState.active?.element !== item) return;
      item.releasePointerCapture(event.pointerId);
      const id = item.dataset.dragId;
      if (id) {
        localStorage.setItem(
          `fresia-next-drag-${id}`,
          JSON.stringify({
            x: Math.round(Number(item.dataset.dragX || 0)),
            y: Math.round(Number(item.dataset.dragY || 0)),
          }),
        );
      }
      item.classList.remove("dragging");
      dragState.active = null;
    };

    const onClick = (event: MouseEvent) => {
      if (!dragState.moved) return;
      event.preventDefault();
      dragState.moved = false;
    };

    items.forEach((item) => {
      const id = item.dataset.dragId;
      if (id) {
        const saved = localStorage.getItem(`fresia-next-drag-${id}`);
        if (saved) {
          try {
            const { x, y } = JSON.parse(saved) as { x?: number; y?: number };
            const safeX = Number(x) || 0;
            const safeY = Number(y) || 0;
            item.dataset.dragX = `${safeX}`;
            item.dataset.dragY = `${safeY}`;
            item.style.setProperty("--drag-x", `${safeX}px`);
            item.style.setProperty("--drag-y", `${safeY}px`);
          } catch {
            localStorage.removeItem(`fresia-next-drag-${id}`);
          }
        }
      }

      item.title = "Hold Shift and drag to reposition this button.";
      item.addEventListener("pointermove", onPointerMove);
      item.addEventListener("pointerleave", onPointerLeave);
      item.addEventListener("pointerdown", onPointerDown);
      item.addEventListener("pointerup", onPointerUp);
      item.addEventListener("click", onClick);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("pointermove", onPointerMove);
        item.removeEventListener("pointerleave", onPointerLeave);
        item.removeEventListener("pointerdown", onPointerDown);
        item.removeEventListener("pointerup", onPointerUp);
        item.removeEventListener("click", onClick);
      });
    };
  }, []);

  return null;
}
