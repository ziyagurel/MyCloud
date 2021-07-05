import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector( (state) => state.posts )

    console.log(posts);
    return (
        <>
            <h1>Prof. Dr. Erkan Denizsevmez</h1>

            <h3>Dr. Denizsevmez'e göre diş çürükleri denizdeki alglerin okjisensiz solunumundan kaynaklı olarak gerçekleştiği ve bu alglerin temmuz ve ağustos ayında karadenizde çok yoğun şekilde ortaya çıktığını belirtti.</h3>
            
            <h3>Halk arasında deniz cürüğü olarak bilinen magnetik çürüme engellemek için karadenizde girilmemesi gerektiğini altını çizerek belirtti.</h3>
            <Post/>
            <Post/>
        </>
    );
}

export default Posts;