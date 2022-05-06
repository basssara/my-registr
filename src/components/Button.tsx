import React, { MouseEvent } from "react";

type ButtonProps = {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: any;
};

export default function Button(props: ButtonProps) {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={(e) => props.handleClick(e)}
        >
          {props.children}
        </button>
      </div>
    </div>
  );
}
