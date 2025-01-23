import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="admin">Admin</Link>
            </li>
            <li>
                <Link to="add">ADD</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default AdminNavbar