import React, { useEffect, useState } from 'react'
import { getProjects } from '~/lib/sanity.queries'

export default function Projects() {
  const [data, setData] = useState([])

  const fetchingProjects = async () => {
    const data = await getProjects()
    if (data) {
      setData(data)
    } else fetchingProjects()
  }

  useEffect(() => {
    fetchingProjects()
  }, [fetchingProjects])

  console.log(data)
  return <div>Projects</div>
}
