import React, { useState, useEffect } from 'react';
import { AdminBlogScreenContainer } from './AdminBlogs.styles';

const AdminBlogs = ({ user, notify }) => {
  return (
    <AdminBlogScreenContainer>
      <div>
        <h2>Blogs</h2>
        <button>Create Blog</button>
      </div>
      <div>
        <p>list of blogs</p>
      </div>
    </AdminBlogScreenContainer>
  )
}

export default AdminBlogs