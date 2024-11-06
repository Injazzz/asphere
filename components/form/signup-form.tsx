/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { House } from "lucide-react";
import { SignUpCredential } from "@/lib/actions";
import { useActionState } from "react";
import SignButtons from "../sign-button";

function SignUpForm() {
  const [state, SignUpAction] = useActionState(SignUpCredential, undefined);

  return (
    <div className='max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white/35 dark:bg-black/35 backdrop-blur-sm border border-neutral-300 dark:border-neutral-900'>
      <div className='w-full flex flex-col gap-3 items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='64'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-loader-pinwheel text-cyan-600'
        >
          <path d='M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0' />
          <path d='M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6' />
          <path d='M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6' />
          <circle cx='12' cy='12' r='10' />
        </svg>

        <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
          Welcome to Asphere
        </h2>
      </div>

      <form action={SignUpAction} className='my-8'>
        <LabelInputContainer className='mb-4'>
          <div className='w-full flex items-center justify-between'>
            <Label htmlFor='username'>Username</Label>
            <Label className='text-red-500'>{state?.errors?.username}</Label>
          </div>

          <Input
            name='username'
            id='username'
            placeholder='johndoe'
            type='text'
          />
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <div className='w-full flex items-center justify-between'>
            <Label htmlFor='email'>Email address</Label>
            <Label className='text-red-500'>{state?.errors?.email}</Label>
          </div>
          <Input
            name='email'
            id='email'
            placeholder='johndoe@gmail.com'
            type='email'
          />
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <div className='w-full flex items-center justify-between'>
            <Label htmlFor='password'>Password</Label>
            <Label className='text-red-500'>{state?.errors?.password}</Label>
          </div>
          <Input
            name='password'
            id='password'
            placeholder='••••••••'
            type='password'
          />
        </LabelInputContainer>
        <LabelInputContainer className='mb-8'>
          <div className='w-full flex items-center justify-between'>
            <Label htmlFor='confirmPassword'>Confirm password</Label>
            <Label className='text-red-500'>
              {state?.errors?.confirmPassword}
            </Label>
          </div>
          <Input
            name='confirmPassword'
            id='confirmPassword'
            placeholder='••••••••'
            type='password'
          />
        </LabelInputContainer>

        <SignButtons.SignUpButton />

        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full'></div>

        <div className='flex flex-col space-y-4'>
          <button
            className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
            type='submit'
          >
            <IconBrandGithub className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
            <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
            type='submit'
          >
            <IconBrandGoogle className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
            <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>

      <div className='flex items-center justify-between'>
        <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
          Don&apos;t have an account? Click{" "}
          <Link
            href='/sign-in'
            className='text-cyan-700 dark:text-cyan-400 hover:text-cyan-600'
          >
            here
          </Link>{" "}
          to sign in.
        </p>

        <Button variant='ghost'>
          <Link href='/'>
            <House />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default SignUpForm;

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
