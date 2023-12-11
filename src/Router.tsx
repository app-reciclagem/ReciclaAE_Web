import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, EditPoint } from "./pages";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/signup" element={<h1>Signup</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/user" element={<h1>User</h1>} />
        <Route path="/user/edit" element={<h1>Edit user</h1>} />
        <Route path="/user/delete" element={<h1>Delete user</h1>} />
        <Route path="/map" element={<h1>Map</h1>} />
        <Route path="/point/create" element={<h1>Create point</h1>} />
        <Route path="/point/editpoint" element={<EditPoint />} />
        <Route path="/point/delete" element={<h1>Delete point</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
