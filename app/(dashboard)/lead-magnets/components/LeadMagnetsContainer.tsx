"use client";

import { Button } from '@/components/ui/button';
import { Lead, LeadMagnet } from '@prisma/client';
import Link from 'next/link';
import React, { use } from 'react';
import LeadMagnetTable from './LeadMagnetTable';

interface LeadMagnetsContainerProps {
    leadMagnets: LeadMagnet[];
    leads: Lead[];
}

function LeadMagnetsContainer({
    leadMagnets,
    leads,
}: LeadMagnetsContainerProps) {
    console.log("Client leadmagnets",leadMagnets);
    console.log("Client leads",leads);
    return (
        <div className='p-6 w-full lg:max-w-5xl lg:mx-auto'>
            <div className='flex justify-between items-center mb-3'>
                <h2 className='text-xl font-semibold'>Lead Magnets</h2>
                <Button variant="default" size="sm">
                    <Link href='/lead-magnet-editor' className='text-white'>Create</Link>
                </Button>
            </div>
            <LeadMagnetTable leadMagnets={leadMagnets} leads={leads}/>
        </div>
    )
}

export default LeadMagnetsContainer