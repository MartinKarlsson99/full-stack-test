package com.fullstack.bookmarkbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class BookmarkBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookmarkBackendApplication.class, args);
    }

    @GetMapping("/")
    public static String test()
    {
        return "Hello World!";
    }

    @GetMapping("/other")
    public static String test1()
    {
        return "Greetings World!";
    }

}
