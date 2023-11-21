import React, { useState } from 'react';
import Postdata from './Postdata';

const Listpost = () => {

    const [postArray, setPostArray,] = useState(Postdata);
    const addlikes = (index) => {
        const temp = postArray;
        temp[index].like++;
        setPostArray([...temp]);
    }

    return (
        <div>
            <div className='col-md-5 mx-auto'>
                {
                    Postdata.map((post, index) => {
                        return <div className='card mb-4'>
                            <div className="card-header">
                                <h4 className="m-0">{post.author}</h4>
                                <p className="m-0">{post.postedOn.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
                                    &nbsp;&nbsp;{post.postedOn.toLocaleTimeString()}</p>
                            </div>

                            <div className="card-body">
                                <p className='m-0'>{post.content}</p>

                            </div>


                            <img className='img-fluid' src={post.image} alt="" />


                            <div className="p-3">
                                <span>{post.like} Likes</span> &nbsp; &middot; &nbsp;
                                <span>{post.comment} comment</span> &nbsp; &middot; &nbsp;
                                <span>{post.share}share</span> &nbsp; &middot; &nbsp;
                                <span>{post.repost} repost</span>
                            </div>

                            <div className="card-footer">
                                <div className="row ">
                                    <div className="col-3">
                                        <button className="btn w-100 rounded-pill" onClick={() => addlikes(index)}><i class="fa-solid fa-heart"></i> Like</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn w-100 rounded-pill"><i class="fa-regular fa-comment"></i> comment</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn w-100 rounded-pill"><i class="fa-regular fa-paper-plane"></i> Share</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn w-100 rounded-pill"><i class="fa-solid fa-repeat"></i> Repost</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Listpost;