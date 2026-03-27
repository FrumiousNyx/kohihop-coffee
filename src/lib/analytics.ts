// Analytics utilities for Kohihop website

declare global {
  gtag: (command: string, config?: any) => void;
}

export function trackPageView(pageName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX'); // Replace with actual GA ID
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.pathname
    });
  }
}

export function trackAddToCart(productId: string, productName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      item_id: productId,
      item_name: productName,
      currency: 'IDR',
      value: 1
    });
  }
}

export function trackCheckout(items: any[], totalValue: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      items: items.length,
      total_value: totalValue,
      currency: 'IDR'
    });
  }
}

export function trackError(error: Error, context: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'error', {
      error_message: error.message,
      error_context: context,
      fatal: false
    });
  }
}

export function trackPerformance(metricName: string, value: number, unit: string = 'ms') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'performance_metric', {
      metric_name: metricName,
      metric_value: value,
      metric_unit: unit
    });
  }
}
