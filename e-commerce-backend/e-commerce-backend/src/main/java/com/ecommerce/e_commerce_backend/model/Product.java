package com.ecommerce.e_commerce_backend.model;

public class Product {
    private String image;
    private String name;
    private int price;
    private int discountedPrice;
    private String description;
    private int rating;

    public Product() {
    }

    private int reviewsCount;


    public Product(String image, String name, int price, int discountedPrice, String description, int rating, int reviewsCount) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.discountedPrice = discountedPrice;
        this.description = description;
        this.rating = rating;
        this.reviewsCount = reviewsCount;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(int discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public int getReviewsCount() {
        return reviewsCount;
    }

    public void setReviewsCount(int reviewsCount) {
        this.reviewsCount = reviewsCount;
    }
}
