'use client'

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { useTranslations } from 'next-intl';
import MyIcon from '../Icon/MyIcons';

interface ResumeButtonProps {
    locale: string;
}

const ResumeButton = ({ locale }: ResumeButtonProps) => {
    const t = useTranslations("HomePage");
    const isPersian = locale === "fa";

    return (
        <DropdownMenu dir={isPersian ? "rtl" : "ltr"}>
            <DropdownMenuTrigger asChild>
                <Button
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-48  sm:w-auto h-12 px-6 font-semibold gap-2 shadow-md cursor-pointer active:scale-98 transition-all bg-primary text-primary-foreground hover:bg-primary/95 rounded-lg flex justify-between"
                >
                    {t("downloadResume")}
                    <MyIcon icon={ArrowDown01Icon} size={30} className="animate-bounce" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align='center'
                className="w-[--radix-dropdown-menu-trigger-width] min-w-48 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg p-1 transition-colors"
            >
                <DropdownMenuItem asChild className='text-start'>
                    <a
                        href="/resumes/mahdi-jeddi-resume-en.pdf"
                        download="Mahdi-Jeddi-Resume-EN.pdf"
                        className="text-start justify-start cursor-pointer px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground block rounded-md transition-colors"
                    >
                        {t("resumeEnglish")}
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a
                        href="/resumes/mahdi-jeddi-resume-fa.pdf"
                        download="Mahdi-Jeddi-Resume-FA.pdf"
                        className="text-start justify-start cursor-pointer px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground block rounded-md transition-colors"
                    >
                        {t("resumePersian")}
                    </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ResumeButton;
