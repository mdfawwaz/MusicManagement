package com.library.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.library.music.entity.Song;

import java.util.List;

public interface SongRepository extends JpaRepository<Song, Long> {

    // Custom queries if needed
    List<Song> findByNameContainingIgnoreCase(String name);
    List<Song> findByArtistContainingIgnoreCase(String artist);
    List<Song> findByCategoryName(String categoryName);
    List<Song> findByAlbumid(Long albumid);

    // Custom query to get songs by album name
    List<Song> findByAlbum(String albumName);

}
