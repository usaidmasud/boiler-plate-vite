import React, { ReactNode } from "react";

type Props = {
  label?: string;
  children?: ReactNode;
  error?: string;
  required?: boolean;
  helpText?: string;
};
function FormGroupWrapper({
  label,
  children,
  error,
  required,
  helpText,
}: Props) {
  return (
    <div className="mb-4">
      {label && (
        <div className="inline-flex gap-0">
          <label className="block mb-1 text-[13px] font-medium font-mono text-gray-800">
            {label}
          </label>
          {required && (
            <span className="text-red-600 text-sm font-bold block">*</span>
          )}
        </div>
      )}
      {children}
      {error && (
        <span className="font-medium text-xs text-red-600 block mt-1">
          {error}
        </span>
      )}
      {helpText && (
        <span className="text-gray-600 text-xs block mt-1">{helpText}</span>
      )}
    </div>
  );
}
export default React.memo(FormGroupWrapper);
