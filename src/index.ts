import { Container, getRandom } from '@cloudflare/containers';

class MyContainer extends Container {
  defaultPort = 5244;
  autoscale = true; // global autoscaling on - new instances spin up when memory or CPU utilization is high
}

// routes requests to the nearest ready container and load balance globally
export default {
    async fetch(request, env) {
        return env.MyContainer.fetch(request);
    }
}
