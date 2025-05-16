# Microservices Architecture with Eureka Service Discovery and API Gateway

## Project Overview

This project demonstrates a microservices architecture using Spring Boot services registered with a Eureka discovery server, along with an API Gateway for routing requests. It includes both Java Spring Boot services and non-Java services (Node.js and Python) that register with Eureka.

## Architecture Components

1. **Eureka Server** - Service registry and discovery server
2. **Product Service** - Spring Boot microservice
3. **Order Service** - Spring Boot microservice
4. **API Gateway** - Spring Cloud Gateway for routing requests
5. **Inventory Service** - Node.js Express service
6. **Customer Service** - Python Flask service

## Technology Stack

- Java 17
- Spring Boot 3.x
- Spring Cloud
- Eureka Service Discovery
- Spring Cloud Gateway
- Node.js (Express)
- Python (Flask)

## Services Details

### Eureka Server
- Port: 8761
- Service registry for all microservices
- Does not register itself as a client
- Configuration in `application.yml`

### Product Service
- Port: 8081
- Context path: `/product-server`
- REST endpoint: `/api/v1/product/all`
- Registered as `PRODUCT-SERVICE` in Eureka

### Order Service
- Port: 8082
- Context path: `/order-service`
- REST endpoint: `/api/v1/order/all`
- Registered as `ORDER-SERVICE` in Eureka

### API Gateway
- Uses Spring Cloud Gateway
- Load balancing with random rule
- Routes configured for:
  - Product Service
  - Order Service
  - Inventory Service (Node.js)
  - Customer Service (Python)

### Inventory Service (Node.js)
- Port: 3000
- Context path: `/inventory-service`
- REST endpoint: `/api/v1/inventory`
- Registered using Eureka JS client

### Customer Service (Python)
- Port: 5000
- Context path: `/customer-service`
- REST endpoint: `/customers`
- Registered using Py-Eureka-Client

## How to Run

1. **Start Eureka Server**:
   ```bash
   cd eureka-server
   mvn spring-boot:run
   ```

2. **Start Product Service**:
   ```bash
   cd product-service
   mvn spring-boot:run
   ```

3. **Start Order Service**:
   ```bash
   cd order-service
   mvn spring-boot:run
   ```

4. **Start API Gateway**:
   ```bash
   cd api-gateway
   mvn spring-boot:run
   ```

5. **Start Inventory Service (Node.js)**:
   ```bash
   cd inventory-service
   npm install
   node app.js
   ```

6. **Start Customer Service (Python)**:
   ```bash
   cd customer-service
   pip install flask py_eureka_client
   python customer_service.py
   ```

## Accessing Services

- Eureka Dashboard: http://localhost:8761
- Product Service via Gateway: http://localhost:8080/product-server/api/v1/product/all
- Order Service via Gateway: http://localhost:8080/order-service/api/v1/order/all
- Inventory Service via Gateway: http://localhost:8080/inventory-service/api/v1/inventory
- Customer Service via Gateway: http://localhost:8080/customer-service/customers

## Key Features

- Service discovery and registration with Eureka
- API Gateway for centralized routing
- Load balancing between service instances
- Support for both Java and non-Java services
- Context path configuration for each service

## Configuration Highlights

- Eureka client configuration for self-registration
- Spring Cloud Gateway routing rules
- Load balancer configuration
- Context path configuration for services

## Dependencies

Each module has its specific dependencies:

- **eureka-server**: Eureka Server
- **product-service/order-service**: Eureka Discovery Client, Spring Web
- **api-gateway**: Eureka Discovery Client, Reactive Gateway, Cloud Load Balancer
- **inventory-service**: Express, Eureka JS Client
- **customer-service**: Flask, Py-Eureka-Client
