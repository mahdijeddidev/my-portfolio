import type { HugeiconsProps } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";


interface IconProps extends Omit<HugeiconsProps, "icon"> {
    icon: object | React.ComponentType<unknown>;
}

export default function MyIcon({ icon, size = 20, className, ...props }: IconProps) {
    return (
        <HugeiconsIcon
            icon={icon as unknown as never}
            size={size}
            className={className}
            {...props}
        />
    );
}
