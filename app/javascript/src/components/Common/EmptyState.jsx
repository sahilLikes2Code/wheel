import React from "react";

import { Button } from "neetoui/v2";

export default function EmptyState({
  image,
  title,
  subtitle,
  primaryAction,
  primaryActionLabel,
}) {
  return (
    <div className="flex flex-row justify-start items-start w-full h-full">
      <div className="m-auto w-3/5">
        <div className="m-auto mb-8 max-w-sm">
          <img src={image} />
        </div>
        <h2 className="mb-4 text-2xl font-medium text-center">{title}</h2>
        <p className="mb-8 text-base font-normal leading-relaxed text-center text-gray-600">
          {subtitle}
        </p>
        <div className="flex flex-row justify-center items-center">
          {primaryAction && (
            <Button
              type="primary"
              icon="ri-add-fill"
              onClick={primaryAction}
              label={primaryActionLabel}
            />
          )}
        </div>
      </div>
    </div>
  );
}
