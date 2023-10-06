// package com.library.music.entity;

// import java.io.Serializable;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
// import jakarta.persistence.Table;

// @Entity
// @Table(name = "favorites")
// public class Favorite implements Serializable {

 

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

 

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private User user; // You may need to create a User entity if not already done

 

//     @ManyToOne
//     @JoinColumn(name = "song_id")
//     private Song song;

 

//     public Favorite() {
//     }

 

//     public Favorite(User user, Song song) {
//         this.user = user;
//         this.song = song;
//     }



//     public Favorite(Long songId) {
        
//     }

 

    
// }
