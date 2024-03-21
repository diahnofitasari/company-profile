"use client";
import { Card } from "flowbite-react";
import { Avatar } from "flowbite-react";
import Link from "next/link";
import { getTeams } from "@/lib/teams";
import { ITeams } from "@/type/type";

interface IMember {
  results : ITeams []
}

export default async function Teams() {
  const teams: IMember = await getTeams();
  // console.log(teams.results[0].name)

  return (
    <div>
      
      {teams.results.map((person) => {
        // key : person.id.value
        // firstname : person.name.first
        // lastname : person.name.last
        // email : person.email
        // phone : person.phone
        // image : person.picture.large
        return (
          <Card href="#" className="max-w-sm bg-red-500">
            <div className="flex flex-row gap-3">
              <div className="w-1/2">
                {/* avatar */}
                <Avatar img={person.picture.large} bordered />
              </div>

              <div className="w-1/2">
                {/* data */}
                <h4>{person.name.first} {person.name.last}</h4>
                <Link href="#">{person.email}</Link>
                <p>{person.phone}</p>
              </div>
            </div>
          </Card>
          
        );
      })}
    </div>
  );
}
