 'use client'
import * as actions from "@/actions";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";


export default function SerachInput(){
    const searchParams = useSearchParams()
    return <form action={actions.search}>
        <Input name="term" placeholder="Search..." defaultValue={searchParams.get('term') || ''}/>
    </form>
}