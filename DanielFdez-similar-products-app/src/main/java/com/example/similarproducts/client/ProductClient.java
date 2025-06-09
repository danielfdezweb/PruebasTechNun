package com.example.similarproducts.client;

import com.example.similarproducts.model.ProductDetail;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "productClient", url = "http://localhost:3001")
public interface ProductClient {

    @GetMapping("/product/{productId}/similarids")
    List<String> getSimilarProductIds(@PathVariable("productId") String productId);

    @GetMapping("/product/{productId}")
    ProductDetail getProductDetail(@PathVariable("productId") String productId);
}
