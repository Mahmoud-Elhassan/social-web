'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAuth } from "./auth"

export default function isUserLoggedIn() {
    const [loggedIn, setLoggedIn] = useState(false)
    const {user, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isLoading) {
          if (user) {
            setLoggedIn(true);
          } else {
            router.push("/login");
          }
        }
      }, [isLoading,user]);

      return {loggedIn, user}
 }