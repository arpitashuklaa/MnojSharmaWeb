'use client'
import Link from "next/link"
import React from "react"
export default function Footer() {
    return(
        <div className=" h-46 bg-gradient-to-r from-amber-500 to-orange-600">
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold mt-10">Connect</h1>
            </div>
            <div className="bg-red-green p-2">
                <div className="">
                    <Link href=""></Link>
                </div>
            </div>
        </div>
    )
}