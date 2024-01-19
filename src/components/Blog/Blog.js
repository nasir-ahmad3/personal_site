import './Blog.css';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/config';
import {useFirebase} from '../../hooks/UseFirebse'

export default function Blog() {
  const {data: skills, isLoading, err} = useFirebase('blog')

  return (
    <section className="blog container" id="blog">
      <h1 className="title gradient-text">blog</h1>
      <div className="blog-wrapper">
        {isLoading && <div>Loading ...</div>}
        {err && <div>{err}</div>}
        {skills && (
          skills.map((skill, index) => (
            <div className="blog" key={index}>
              <div className="img" style={{ backgroundImage: `url(${skill.image})` }}></div>
              <div className="title">{skill.title}</div>
              <p className="write_by">
                write by: <span>nasir ahamd ahmady</span>
              </p>
              <p className="des">{skill.des}</p>
              <a href="#" className="more gradient-text">reade more</a>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
