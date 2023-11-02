import React, { useState } from 'react'

function ProjectApp() {
    const [title, setTitle] = useState('');
    var md5 = require("md5"); 
    
  return (
    <div className='div'>
      
        <textarea
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        >
        </textarea>
        <h1>Type to hash something!</h1>
        <p>{'MD5 Hash: ' +md5(title)}</p>
        
    </div>
  )
}

export default ProjectApp