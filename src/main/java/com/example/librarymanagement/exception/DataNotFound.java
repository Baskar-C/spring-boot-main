package com.example.librarymanagement.exception;

public class DataNotFound extends RuntimeException{
    DataNotFound (String message) {
        super(message);
    }
}