package com.example.similarproducts.controller;

import com.example.similarproducts.model.ProductDetail;
import com.example.similarproducts.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{productId}/similar")
    public List<ProductDetail> getSimilarProducts(@PathVariable String productId) {
        return productService.getSimilarProductDetails(productId);
    }
}
