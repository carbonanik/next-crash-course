import Head from "next/head";
import Link from "next/link";

export default function Products(){
    return <div>
        <Link href={'/product/1'}>
                My Product
        </Link>
    </div>
}