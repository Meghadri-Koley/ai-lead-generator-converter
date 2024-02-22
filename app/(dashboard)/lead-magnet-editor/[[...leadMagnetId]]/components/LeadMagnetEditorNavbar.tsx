"use client"
import { useLeadMagnetEditorContext } from '@/context/LeadMagnetEditorContext'
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsArrowLeft } from "react-icons/bs";

function LeadMagnetEditorNavbar() {

    const router = useRouter();
    const { edittedLeadMagnet } = useLeadMagnetEditorContext();

    console.log("editted lead magnet:", edittedLeadMagnet);


    return (
        <div className='flex w-full flex-row items-center justify-between border-b-[1px] border-solid border-gray-200 text-gray-700'>
            <div className='flex flex-row items-center'>
                <BsArrowLeft
                    size={20}
                    className='pr-3 w-fit cursor-pointer'
                    onClick={() => void router.push("/lead-magnets")}
                />
            </div>
            <div className='flex flex-row items-center gap-x-4'>

            </div>
        </div>
    )
}

export default LeadMagnetEditorNavbar