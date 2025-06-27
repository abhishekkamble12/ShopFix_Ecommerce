import React from 'react';
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Settings, Search } from "lucide-react"

function Orbitalpage() {
  return (
    <div className="relative overflow-hidden h-[500px] w-full">
  <OrbitingCircles>
    <File />
    <Settings />
    <File />
  </OrbitingCircles>
  <OrbitingCircles radius={100} reverse>
    <File />
    <Settings />
    <File />
    <Search />
  </OrbitingCircles>
</div>
  )
}

export default Orbitalpage
