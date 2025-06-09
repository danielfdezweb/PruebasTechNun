package com.example.similarproducts.service;

import com.example.similarproducts.client.ProductClient;
import com.example.similarproducts.model.ProductDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductClient productClient;

    public List<ProductDetail> getSimilarProductDetails(String productId) {
        List<String> similarIds = productClient.getSimilarProductIds(productId);
        List<ProductDetail> result = new ArrayList<>();
        for (String id : similarIds) {
            try {
                result.add(productClient.getProductDetail(id));
            } catch (Exception e) {
                // Handle not found or errors gracefully
            }
        }
        return result;
    }
}
