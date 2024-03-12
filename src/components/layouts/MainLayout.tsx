"use client"

import ContentLayout from "./ContentLayout";

export default function MainLayout({ children }: { children: any }) {
    return (
        <div>
            <div className="flex h-full">
                <ContentLayout>{children}</ContentLayout>
            </div>
        </div>
    );
}