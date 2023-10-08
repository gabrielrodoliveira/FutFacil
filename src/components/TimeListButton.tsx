import React, { useState } from "react";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface TimeListButtonProps extends ComponentPropsWithoutRef<"button"> {
  times: string[]; // Array de horários que você deseja exibir
  onTimeSelect: (horario: string) => void; // Renomeie a propriedade para evitar conflitos
}
function TimeListButton({ className, times, onTimeSelect, ...props }: TimeListButtonProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setIsOpen(false);
    onTimeSelect(time); // Chame a função onTimeSelect com o horário selecionado
  };

  const _className = twMerge(
    "p-2 text-sm font-medium shadow transition-all",
    className
  );

  return (
    <div>
      <button className={_className} onClick={toggleList} {...props}>
        {selectedTime ? selectedTime : "Selecione um horário"}
      </button>
      {isOpen && (
        <ul className="list-inside">
          {times.map((time, index) => (
            <li
              key={index}
              onClick={() => handleTimeClick(time)}
              className="cursor-pointer hover:bg-gray-200"
            >
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TimeListButton;