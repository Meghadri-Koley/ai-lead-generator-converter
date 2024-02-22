import React from 'react';
import { SignInButton, UserButton, currentUser } from '@clerk/nextjs';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { Button } from '@/components/ui/button';

async function LandingPageNavBar() {

  const user = await currentUser();
  return (
    <Navbar className='flex w-screen items-center p-6'>
      <NavbarBrand >
        <p className="font-bold text-inherit text-3xl">AI-LM</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem>
          <Link color="primary" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end" className='pl-10'>
            {
              user?(
                <div className='flex flex-row gap-x-4 items-center'>
                  <Link href='/lead-magnets'>
                    <Button variant="outline" size="sm">Open App</Button>
                  </Link>
                  <UserButton/>
                </div>
              ):(
                <SignInButton/>
              )
            }
      </NavbarContent>
    </Navbar>
  );




}

export default LandingPageNavBar