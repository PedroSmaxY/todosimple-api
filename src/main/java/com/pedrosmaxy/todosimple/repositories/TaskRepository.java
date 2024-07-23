package com.pedrosmaxy.todosimple.repositories;

import com.pedrosmaxy.todosimple.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    Optional<Task> findById(long id);

    @Query(value = "SELECT t FROM Task t WHERE t.user.id = :user_id")
    List<Task> findByUser_Id(@Param("user_id") Long id);
}
