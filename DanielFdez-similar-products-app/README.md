# Similar Products API

This Spring Boot application implements the agreed REST API to provide the detail of similar products for a given product. It is part of a technical test.

## Requirements

- Java 17
- Maven
- Docker (for testing with mocks and test runner)

## Project Structure

- `GET /product/{productId}/similar` → Aggregates data from existing APIs to return product details for similar products.

## How It Works

The application integrates with two existing endpoints (mocked on `localhost:3001`):

1. `GET /product/{productId}/similarids` — returns a list of similar product IDs.
2. `GET /product/{productId}` — returns the product detail.

### Our New Endpoint

```
GET /product/{productId}/similar
```

**Response Example:**
```json
[
  {
    "id": "2",
    "name": "Shirt",
    "price": 29.99,
    "availability": true
  },
  {
    "id": "3",
    "name": "Jeans",
    "price": 49.99,
    "availability": false
  }
]
```

## Run the Application

### Locally

```bash
mvn clean install
mvn spring-boot:run
```

The app runs on: [http://localhost:5000](http://localhost:5000)

### With Docker

```bash
docker build -t similar-products-app .
docker run -p 5000:5000 similar-products-app
```

## Run Tests

Start the mocks and test stack:

```bash
docker-compose up -d simulado influxdb grafana
```

Test the mock manually:

```bash
curl http://localhost:3001/product/1/similarids
```

Run performance and functionality tests:

```bash
docker-compose run --rm k6 run scripts/test.js
```

View results in Grafana: [http://localhost:3000/d/Le2Ku9NMk/k6-performance-test](http://localhost:3000/d/Le2Ku9NMk/k6-performance-test)

## Evaluation Criteria

- Code clarity and maintainability
- Performance and efficiency
- Error handling and resilience

---

**Note:** You only need to implement `yourApp`, the Test and Mocks infrastructure is provided.
