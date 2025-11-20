'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const catalogRef = useRef<HTMLDivElement>(null);

  // Обработчик клика вне компонента, для закрытия меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!catalogRef.current) return;
      if (!catalogRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) { // Если меню открыто, добавляем обработчик клика на весь документ
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => { // Если меню закрыто, удаляем обработчик клика
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const updateFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if(value) {
      params.set('category', value);
    } else {
      params.delete('category');
    }
    router.replace(`${pathname}?${params.toString()}`);
    setIsOpen(false); // Закрываем меню после выбора
  };

  return (
    <div ref={catalogRef}>
      <div className="catalog-button">
        <button onClick={() => setIsOpen(v => !v)}>
          <span className="catalog-button_burger"></span>
          <span className="catalog-button_text">Каталог</span>
        </button>

        <div className="catalog" style={{ display: isOpen ? 'block' : 'none' }}>
          <ul className="catalog-list">
            <li onClick={() => updateFilter('Игровая приставка')}>Игровая приставка</li>
            <li onClick={() => updateFilter('Периферия для ПК')}>Периферия для ПК</li>
            <li onClick={() => updateFilter('Игры и софт')}>Игры и софт</li>
          </ul>
        </div>
      </div>
    </div>
  )
}