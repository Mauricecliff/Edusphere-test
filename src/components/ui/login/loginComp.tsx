import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 

export default function LoginComp() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center">Edusphere Logo here</CardTitle>
        <CardDescription className="text-center font-bold">Login in</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
        <div className="flex flex-col space-y-1.5 mt-2">
              <Label htmlFor="framework">Select Role</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Student</SelectItem>
                  <SelectItem value="sveltekit">Lecturer</SelectItem>
                  <SelectItem value="astro">Professor</SelectItem>
                  <SelectItem value="nuxt">Hod</SelectItem>
                  <SelectItem value="nuxt">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          <div className="grid w-full items-center gap-4 mt-2">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email Address</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5 mt-2">
              <Label htmlFor="name">Password</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="mt-2">
        <Button className="w-full">Login</Button>
      </CardFooter>
    </Card>
  )
}
