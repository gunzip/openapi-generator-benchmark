# Test API SDK

TypeScript SDK for Test API API v1.0.0.

Test API.

## Installation

```bash
npm install [package-name]
```

## Usage

```typescript
import { sdkConfig } from '[package-name]';
import { pet } from '[package-name]/routes';

// Configure the SDK
sdkConfig.baseUrl = 'https://your-api-url.com';
sdkConfig.headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
};

// Use the SDK
async function example() {
  try {
    // Example API call
    const result = await pet.getPets();
    console.log(result);
  } catch (error) {
    console.error('API Error:', error);
  }
}

example();
```

## API Reference

This SDK is generated from an OpenAPI specification. All endpoints and data models are strongly typed with TypeScript.

### Configuration

You can configure the SDK by modifying the `sdkConfig` object:

```typescript
import { sdkConfig } from '[package-name]';

sdkConfig.baseUrl = 'https://your-api-url.com';
sdkConfig.headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'X-Custom-Header': 'Custom Value'
};
```

## License

MIT
