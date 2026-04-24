# Web Card - Technical Implementation Roadmap

**From Current Vue 3 SPA to Full-Stack Platform**

---

## CURRENT TECHNICAL STATE

### Stack Analysis
- **Frontend:** Vue 3 (Options API), Vue Router 4
- **Styling:** Scoped CSS, Montserrat font, custom CSS variables
- **Hosting:** Netlify
- **Build:** Vue CLI 5, Webpack
- **Package Manager:** npm

### Current Features
- Static marketing website
- Basic navigation with scroll behavior
- Image carousel
- FAQ accordion
- Contact information (manual)
- No backend, no database, no authentication

### Technical Debt to Address
1. No state management (Vuex/Pinia)
2. No API layer
3. Hard-coded content
4. No CMS
5. No testing framework
6. No CI/CD pipeline
7. Limited component reusability

---

## PHASE 1: QUICK TECHNICAL WINS (0-6 Months)

### 1.1 Immediate Website Improvements

#### Fix Content Issues
```bash
# Files to update:
- src/components/ContentPage.vue (line 8, 12: "invitaiton" → "invitation")
- src/components/HeaderBar.vue (line 11: "invitaiton" → "invitation")
```

#### Add New Pages/Components

**Create Pricing Page Component:**
```vue
<!-- src/components/PricingPage.vue -->
<template>
  <section class="pricing-section">
    <h2>Our Packages</h2>
    <div class="pricing-cards">
      <div class="pricing-card" v-for="package in packages" :key="package.id">
        <h3>{{ package.name }}</h3>
        <p class="price">₹{{ package.price }}</p>
        <ul class="features">
          <li v-for="feature in package.features" :key="feature">
            <i class="fa-solid fa-check"></i> {{ feature }}
          </li>
        </ul>
        <button @click="selectPackage(package)">Choose Plan</button>
      </div>
    </div>
  </section>
</template>
```

**Create Portfolio/Gallery Page:**
```vue
<!-- src/components/PortfolioPage.vue -->
<template>
  <section class="portfolio">
    <h2>Our Designs</h2>
    <div class="filter-buttons">
      <button @click="filter = 'all'" :class="{active: filter === 'all'}">All</button>
      <button @click="filter = 'wedding'" :class="{active: filter === 'wedding'}">Wedding</button>
      <button @click="filter = 'birthday'" :class="{active: filter === 'birthday'}">Birthday</button>
      <!-- Add more filters -->
    </div>
    <div class="portfolio-grid">
      <div class="portfolio-item" v-for="item in filteredPortfolio" :key="item.id">
        <img :src="item.thumbnail" :alt="item.title" />
        <div class="overlay">
          <h4>{{ item.title }}</h4>
          <a :href="item.liveUrl" target="_blank">View Live</a>
        </div>
      </div>
    </div>
  </section>
</template>
```

**Create Testimonials Component:**
```vue
<!-- src/components/TestimonialsSection.vue -->
<template>
  <section class="testimonials">
    <h2>What Our Customers Say</h2>
    <div class="testimonial-slider">
      <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index" 
           v-show="currentIndex === index">
        <div class="stars">★★★★★</div>
        <p class="quote">"{{ testimonial.text }}"</p>
        <p class="author">- {{ testimonial.name }}, {{ testimonial.event }}</p>
      </div>
    </div>
    <div class="slider-controls">
      <button @click="prev">←</button>
      <button @click="next">→</button>
    </div>
  </section>
</template>
```

#### Add New Routes
```javascript
// src/routes.js - Add new routes
import PricingPage from './components/PricingPage.vue'
import PortfolioPage from './components/PortfolioPage.vue'

const routes = [
    { path: '/', component: ContentPage },
    { path: '/about', component: AboutUs },
    { path: '/FAQ', component: FAQ },
    { path: '/pricing', component: PricingPage },      // NEW
    { path: '/portfolio', component: PortfolioPage },   // NEW
]
```

#### SEO & Analytics Setup

**Add Meta Tags (Update index.html):**
```html
<!-- public/index.html -->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="Create beautiful digital wedding invitations with Web Card. Affordable, customizable, and eco-friendly e-invitations for weddings, birthdays, and special events.">
  <meta name="keywords" content="digital wedding invitation, e-invitation, online wedding card, QR code invitation, eco-friendly wedding, affordable invitation">
  <meta name="author" content="Web Card - Faisal & Hassan">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://iwedsite.netlify.app/">
  <meta property="og:title" content="Web Card - Digital Wedding Invitations">
  <meta property="og:description" content="Create beautiful digital invitations for your special day">
  <meta property="og:image" content="https://iwedsite.netlify.app/og-image.jpg">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://iwedsite.netlify.app/">
  <meta property="twitter:title" content="Web Card - Digital Wedding Invitations">
  <meta property="twitter:description" content="Create beautiful digital invitations for your special day">
  <meta property="twitter:image" content="https://iwedsite.netlify.app/og-image.jpg">
  
  <title>Web Card - Digital Wedding Invitations & E-Invites</title>
</head>
```

**Add Google Analytics:**
```javascript
// src/main.js - Add at the top
// Add Google Analytics
(function() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
})();
```

#### WhatsApp Integration
```vue
<!-- Add to src/components/FooterPage.vue or create FloatingWhatsApp.vue -->
<template>
  <a href="https://wa.me/917411242726?text=Hi!%20I'm%20interested%20in%20creating%20a%20digital%20invitation" 
     class="whatsapp-float" 
     target="_blank">
    <i class="fa-brands fa-whatsapp"></i>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  background-color: #128C7E;
}
</style>
```

### 1.2 Content Management (Simple Approach)

**Use JSON files for dynamic content:**

```javascript
// src/data/packages.json
[
  {
    "id": "basic",
    "name": "Basic Package",
    "price": 1999,
    "features": [
      "1 Premium Template",
      "Unlimited Customization",
      "QR Code Generation",
      "Mobile Responsive",
      "2 Weeks Hosting",
      "24-48 Hour Delivery"
    ],
    "popular": false
  },
  {
    "id": "premium",
    "name": "Premium Package",
    "price": 3499,
    "features": [
      "3 Template Options",
      "Custom Colors & Fonts",
      "Photo Gallery (10 photos)",
      "RSVP Form",
      "Google Maps Integration",
      "4 Weeks Hosting",
      "24 Hour Delivery"
    ],
    "popular": true
  },
  {
    "id": "deluxe",
    "name": "Deluxe Package",
    "price": 5999,
    "features": [
      "Unlimited Templates",
      "Complete Customization",
      "Unlimited Photo Gallery",
      "Advanced RSVP with Analytics",
      "Custom Domain Option",
      "6 Months Hosting",
      "Same Day Delivery",
      "Priority Support"
    ],
    "popular": false
  }
]
```

```javascript
// src/data/testimonials.json
[
  {
    "name": "Priya & Rahul",
    "event": "Wedding, Mumbai",
    "text": "Web Card made our wedding invitation process so easy! Beautiful designs and quick delivery.",
    "rating": 5,
    "image": "/testimonials/priya-rahul.jpg"
  }
  // Add more as you collect them
]
```

### 1.3 Form Integration (Google Forms/Typeform)

**Simple Order Form Integration:**
```vue
<!-- src/components/OrderForm.vue -->
<template>
  <section class="order-section">
    <h2>Start Your Order</h2>
    <p>Fill out this form and we'll get back to you within 24 hours</p>
    
    <!-- Embed Google Form -->
    <iframe 
      src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
      width="100%" 
      height="1200" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
      Loading…
    </iframe>
    
    <!-- OR use a custom form with Formspree/EmailJS -->
    <form @submit.prevent="submitOrder" class="custom-order-form">
      <input v-model="form.name" type="text" placeholder="Your Name" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.phone" type="tel" placeholder="Phone" required />
      <select v-model="form.eventType" required>
        <option value="">Select Event Type</option>
        <option value="wedding">Wedding</option>
        <option value="engagement">Engagement</option>
        <option value="birthday">Birthday</option>
        <!-- Add more options -->
      </select>
      <select v-model="form.package" required>
        <option value="">Select Package</option>
        <option value="basic">Basic - ₹1,999</option>
        <option value="premium">Premium - ₹3,499</option>
        <option value="deluxe">Deluxe - ₹5,999</option>
      </select>
      <textarea v-model="form.details" placeholder="Event Details" rows="5"></textarea>
      <button type="submit">Submit Order</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "OrderForm",
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        eventType: '',
        package: '',
        details: ''
      }
    };
  },
  methods: {
    async submitOrder() {
      // Use EmailJS or Formspree
      // Example with EmailJS:
      try {
        await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.form);
        alert('Order submitted! We will contact you within 24 hours.');
        this.resetForm();
      } catch (error) {
        alert('Error submitting order. Please try again or WhatsApp us.');
      }
    },
    resetForm() {
      this.form = { name: '', email: '', phone: '', eventType: '', package: '', details: '' };
    }
  }
};
</script>
```

---

## PHASE 2: FULL-STACK PLATFORM (6-18 Months)

### 2.1 Architecture Decision

**Recommended Tech Stack:**

#### Option A: Firebase (Fastest MVP)
```
Frontend: Vue 3 + Vite (upgrade from Vue CLI)
Backend: Firebase
  - Authentication: Firebase Auth
  - Database: Firestore
  - Storage: Firebase Storage
  - Hosting: Firebase Hosting
  - Functions: Cloud Functions
  - Analytics: Google Analytics + Firebase Analytics
Payment: Razorpay integration
```

**Pros:** Fast setup, managed infrastructure, automatic scaling  
**Cons:** Vendor lock-in, Firebase costs can scale up

#### Option B: Custom Backend (More Control)
```
Frontend: Vue 3 + Vite
Backend: Node.js + Express.js
Database: PostgreSQL
ORM: Prisma or Sequelize
Storage: AWS S3 or Cloudinary
Hosting: 
  - Frontend: Vercel/Netlify
  - Backend: Railway/Render/DigitalOcean
  - Database: Supabase (managed Postgres)
Authentication: JWT + bcrypt OR Supabase Auth
Payment: Razorpay
```

**Pros:** Full control, better for complex features, cost-effective at scale  
**Cons:** More setup time, need to manage infrastructure

**Recommendation:** Start with **Firebase** for speed, migrate to custom backend if needed later.

### 2.2 Project Setup (Firebase Approach)

#### Step 1: Upgrade to Vite
```bash
# Create new Vite project
npm create vite@latest webcard-platform -- --template vue

# Install dependencies
cd webcard-platform
npm install

# Install Firebase
npm install firebase

# Install additional dependencies
npm install vue-router@4 pinia
npm install -D tailwindcss postcss autoprefixer  # Optional: Better than custom CSS
```

#### Step 2: Firebase Configuration
```javascript
// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
```

#### Step 3: State Management with Pinia
```javascript
// src/stores/auth.js
import { defineStore } from 'pinia';
import { auth } from '@/firebase/config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: true
  }),
  
  actions: {
    async register(email, password, userData) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Save additional user data to Firestore
      await this.saveUserData(userCredential.user.uid, userData);
      this.user = userCredential.user;
    },
    
    async login(email, password) {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      this.user = userCredential.user;
    },
    
    async logout() {
      await signOut(auth);
      this.user = null;
    },
    
    initAuth() {
      onAuthStateChanged(auth, (user) => {
        this.user = user;
        this.loading = false;
      });
    }
  }
});
```

### 2.3 Core Features Implementation

#### Database Schema (Firestore Collections)

```javascript
// Collections structure:

// users/
{
  uid: "firebase_uid",
  email: "user@example.com",
  name: "John Doe",
  phone: "+919876543210",
  createdAt: timestamp,
  role: "customer" // or "admin"
}

// orders/
{
  orderId: "ORD-20260423-001",
  userId: "firebase_uid",
  package: "premium",
  eventType: "wedding",
  eventDate: timestamp,
  eventDetails: {
    coupleName: "Bride & Groom",
    venue: "...",
    customization: {...}
  },
  status: "pending", // pending, in-progress, review, completed, cancelled
  paymentStatus: "paid", // pending, paid, refunded
  paymentId: "razorpay_payment_id",
  amount: 3499,
  templateUrl: "https://...",
  qrCode: "https://...",
  createdAt: timestamp,
  updatedAt: timestamp,
  deliveryDate: timestamp
}

// templates/
{
  templateId: "TEMP-001",
  name: "Royal Wedding",
  category: "wedding",
  thumbnail: "https://...",
  previewUrl: "https://...",
  isPremium: false,
  price: 0, // if marketplace in future
  sections: ["hero", "story", "gallery", "rsvp", "map"],
  customizableFields: [...],
  popularity: 100 // for sorting
}

// rsvps/ (subcollection of orders)
{
  orderId: "ORD-20260423-001",
  guestName: "Guest Name",
  email: "guest@example.com",
  phone: "+919876543210",
  attending: true,
  guestsCount: 2,
  mealPreference: "veg",
  message: "Congratulations!",
  submittedAt: timestamp
}
```

#### Customer Dashboard Component

```vue
<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard">
    <aside class="sidebar">
      <nav>
        <router-link to="/dashboard/orders">My Orders</router-link>
        <router-link to="/dashboard/create">Create New</router-link>
        <router-link to="/dashboard/profile">Profile</router-link>
        <button @click="logout">Logout</button>
      </nav>
    </aside>
    
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
  await authStore.logout();
  router.push('/login');
};
</script>
```

```vue
<!-- src/views/dashboard/Orders.vue -->
<template>
  <div class="orders-page">
    <h1>My Orders</h1>
    
    <div v-if="loading">Loading orders...</div>
    
    <div v-else-if="orders.length === 0" class="empty-state">
      <p>You haven't created any invitations yet.</p>
      <router-link to="/dashboard/create">Create Your First Invitation</router-link>
    </div>
    
    <div v-else class="orders-grid">
      <div class="order-card" v-for="order in orders" :key="order.id">
        <div class="order-header">
          <span class="order-id">{{ order.orderId }}</span>
          <span :class="['status', order.status]">{{ order.status }}</span>
        </div>
        
        <h3>{{ order.eventDetails.coupleName }}</h3>
        <p class="event-date">{{ formatDate(order.eventDate) }}</p>
        <p class="package">{{ order.package }} Package</p>
        
        <div class="order-actions">
          <button v-if="order.status === 'completed'" @click="viewInvitation(order)">
            View Invitation
          </button>
          <button v-if="order.status === 'review'" @click="approveDesign(order)">
            Approve Design
          </button>
          <button @click="viewRSVPs(order)">View RSVPs ({{ order.rsvpCount || 0 }})</button>
          <button @click="downloadQR(order)">Download QR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const orders = ref([]);
const loading = ref(true);

onMounted(async () => {
  // Fetch user's orders
  const q = query(
    collection(db, 'orders'),
    where('userId', '==', authStore.user.uid)
  );
  
  const querySnapshot = await getDocs(q);
  orders.value = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  
  loading.value = false;
});

const formatDate = (timestamp) => {
  return new Date(timestamp.seconds * 1000).toLocaleDateString('en-IN');
};

const viewInvitation = (order) => {
  window.open(order.templateUrl, '_blank');
};

// Add other methods...
</script>
```

#### Template Builder (Simplified DIY Version)

```vue
<!-- src/views/dashboard/CreateInvitation.vue -->
<template>
  <div class="create-invitation">
    <div class="builder-steps">
      <div :class="['step', {active: currentStep === 1}]">1. Choose Template</div>
      <div :class="['step', {active: currentStep === 2}]">2. Customize</div>
      <div :class="['step', {active: currentStep === 3}]">3. Review & Pay</div>
    </div>
    
    <!-- Step 1: Template Selection -->
    <div v-if="currentStep === 1" class="template-selection">
      <h2>Choose Your Template</h2>
      <div class="templates-grid">
        <div 
          v-for="template in templates" 
          :key="template.id"
          :class="['template-card', {selected: selectedTemplate?.id === template.id}]"
          @click="selectTemplate(template)">
          <img :src="template.thumbnail" :alt="template.name" />
          <h4>{{ template.name }}</h4>
          <button>Select</button>
        </div>
      </div>
      <button @click="nextStep" :disabled="!selectedTemplate">Next</button>
    </div>
    
    <!-- Step 2: Customization -->
    <div v-if="currentStep === 2" class="customization">
      <div class="editor-panel">
        <h3>Customize Your Invitation</h3>
        
        <div class="form-group">
          <label>Couple Names</label>
          <input v-model="customization.coupleName" type="text" placeholder="Bride & Groom" />
        </div>
        
        <div class="form-group">
          <label>Event Date</label>
          <input v-model="customization.eventDate" type="date" />
        </div>
        
        <div class="form-group">
          <label>Venue</label>
          <input v-model="customization.venue" type="text" />
        </div>
        
        <div class="form-group">
          <label>Event Time</label>
          <input v-model="customization.eventTime" type="time" />
        </div>
        
        <div class="form-group">
          <label>Color Theme</label>
          <input v-model="customization.primaryColor" type="color" />
        </div>
        
        <div class="form-group">
          <label>Upload Photos (max 10)</label>
          <input type="file" multiple accept="image/*" @change="handlePhotoUpload" />
        </div>
        
        <!-- Add more customization options -->
      </div>
      
      <div class="preview-panel">
        <h3>Live Preview</h3>
        <iframe :src="previewUrl" frameborder="0"></iframe>
      </div>
      
      <div class="actions">
        <button @click="prevStep">Back</button>
        <button @click="nextStep">Next</button>
      </div>
    </div>
    
    <!-- Step 3: Review & Payment -->
    <div v-if="currentStep === 3" class="review-payment">
      <h2>Review Your Order</h2>
      
      <div class="order-summary">
        <h3>Order Summary</h3>
        <p><strong>Template:</strong> {{ selectedTemplate.name }}</p>
        <p><strong>Package:</strong> {{ selectedPackage }}</p>
        <p><strong>Event:</strong> {{ customization.coupleName }}</p>
        <p><strong>Date:</strong> {{ customization.eventDate }}</p>
        <hr>
        <p class="total"><strong>Total:</strong> ₹{{ calculateTotal() }}</p>
      </div>
      
      <button @click="initiatePayment" class="pay-button">
        Proceed to Payment
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { useRazorpay } from '@/composables/useRazorpay';

const currentStep = ref(1);
const templates = ref([]);
const selectedTemplate = ref(null);
const selectedPackage = ref('premium');
const customization = ref({
  coupleName: '',
  eventDate: '',
  venue: '',
  eventTime: '',
  primaryColor: '#a876aa',
  photos: []
});

const { createOrder, verifyPayment } = useRazorpay();

onMounted(async () => {
  // Fetch templates from Firestore
  const querySnapshot = await getDocs(collection(db, 'templates'));
  templates.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

const selectTemplate = (template) => {
  selectedTemplate.value = template;
};

const nextStep = () => {
  if (currentStep.value < 3) currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--;
};

const calculateTotal = () => {
  const packagePrices = { basic: 1999, premium: 3499, deluxe: 5999 };
  return packagePrices[selectedPackage.value];
};

const initiatePayment = async () => {
  const amount = calculateTotal();
  const orderId = await createOrder(amount);
  
  // Razorpay checkout
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY,
    amount: amount * 100,
    currency: 'INR',
    name: 'Web Card',
    description: 'Digital Invitation',
    order_id: orderId,
    handler: async (response) => {
      const verified = await verifyPayment(response);
      if (verified) {
        await saveOrder(response);
        alert('Payment successful! Your order has been placed.');
        // Redirect to dashboard
      }
    }
  };
  
  const razorpay = new window.Razorpay(options);
  razorpay.open();
};

const saveOrder = async (paymentResponse) => {
  await addDoc(collection(db, 'orders'), {
    userId: authStore.user.uid,
    templateId: selectedTemplate.value.id,
    package: selectedPackage.value,
    customization: customization.value,
    paymentId: paymentResponse.razorpay_payment_id,
    amount: calculateTotal(),
    status: 'pending',
    paymentStatus: 'paid',
    createdAt: new Date(),
    orderId: `ORD-${Date.now()}`
  });
};
</script>
```

#### Razorpay Integration

```javascript
// src/composables/useRazorpay.js
import { ref } from 'vue';

export function useRazorpay() {
  const loading = ref(false);
  const error = ref(null);
  
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  const createOrder = async (amount) => {
    // Call your backend/cloud function to create Razorpay order
    // This should NOT be done client-side in production
    const response = await fetch('/api/create-razorpay-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });
    const data = await response.json();
    return data.orderId;
  };
  
  const verifyPayment = async (paymentResponse) => {
    // Verify payment on backend
    const response = await fetch('/api/verify-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentResponse)
    });
    const data = await response.json();
    return data.verified;
  };
  
  return {
    loading,
    error,
    loadRazorpay,
    createOrder,
    verifyPayment
  };
}
```

#### Cloud Functions for Backend Logic

```javascript
// functions/index.js (Firebase Cloud Functions)
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Razorpay = require('razorpay');

admin.initializeApp();

const razorpay = new Razorpay({
  key_id: functions.config().razorpay.key_id,
  key_secret: functions.config().razorpay.key_secret
});

// Create Razorpay order
exports.createRazorpayOrder = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  
  const { amount } = data;
  
  const options = {
    amount: amount * 100, // amount in paise
    currency: 'INR',
    receipt: `order_${Date.now()}`
  };
  
  try {
    const order = await razorpay.orders.create(options);
    return { orderId: order.id };
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Failed to create order');
  }
});

// Send email notification when order is placed
exports.sendOrderConfirmation = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, context) => {
    const order = snap.data();
    
    // Send email to customer
    // Send email to admin (Faisal & Hassan)
    // Send WhatsApp notification
    
    // Use SendGrid, Mailgun, or Firebase Extensions for email
  });

// Generate QR code for invitation
exports.generateQRCode = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, context) => {
    const order = snap.data();
    const invitationUrl = `https://webcard.app/invite/${snap.id}`;
    
    // Use QR code library to generate QR
    // Upload to Firebase Storage
    // Update order document with QR URL
  });
```

### 2.4 Admin Dashboard

```vue
<!-- src/views/admin/AdminDashboard.vue -->
<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>
    
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Orders</h3>
        <p class="stat-value">{{ stats.totalOrders }}</p>
      </div>
      <div class="stat-card">
        <h3>Pending Orders</h3>
        <p class="stat-value">{{ stats.pendingOrders }}</p>
      </div>
      <div class="stat-card">
        <h3>Revenue (This Month)</h3>
        <p class="stat-value">₹{{ stats.monthlyRevenue }}</p>
      </div>
      <div class="stat-card">
        <h3>Active Customers</h3>
        <p class="stat-value">{{ stats.activeCustomers }}</p>
      </div>
    </div>
    
    <div class="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Event Date</th>
            <th>Package</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in recentOrders" :key="order.id">
            <td>{{ order.orderId }}</td>
            <td>{{ order.customerName }}</td>
            <td>{{ formatDate(order.eventDate) }}</td>
            <td>{{ order.package }}</td>
            <td><span :class="['badge', order.status]">{{ order.status }}</span></td>
            <td>
              <button @click="viewOrder(order)">View</button>
              <button @click="updateStatus(order)">Update Status</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
```

---

## PHASE 3: ADVANCED FEATURES (18-36 Months)

### 3.1 AI Integration

```javascript
// src/services/aiService.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export async function generateInvitationText(eventDetails) {
  const prompt = `Create a beautiful, ${eventDetails.tone} wedding invitation text for:
    Couple: ${eventDetails.coupleName}
    Event Type: ${eventDetails.eventType}
    Venue: ${eventDetails.venue}
    Date: ${eventDetails.date}
    
    Generate elegant invitation wording.`;
  
  const response = await openai.createCompletion({
    model: 'gpt-4',
    prompt: prompt,
    max_tokens: 200
  });
  
  return response.data.choices[0].text;
}

export async function suggestTemplates(preferences) {
  // AI-powered template recommendation based on user preferences
}
```

### 3.2 Mobile App (React Native/Flutter)

```
webcard-mobile/
├── src/
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LoginScreen.jsx
│   │   │   └── RegisterScreen.jsx
│   │   ├── Dashboard/
│   │   │   ├── DashboardScreen.jsx
│   │   │   └── OrdersScreen.jsx
│   │   ├── CreateInvitation/
│   │   │   ├── TemplateSelectionScreen.jsx
│   │   │   └── CustomizationScreen.jsx
│   │   └── Invitation/
│   │       └── ViewInvitationScreen.jsx
│   ├── components/
│   ├── navigation/
│   ├── services/
│   └── utils/
├── App.jsx
└── package.json
```

### 3.3 AR Invitation Experience

```javascript
// Use Three.js or A-Frame for WebAR
// src/components/ARInvitation.vue
<template>
  <a-scene embedded arjs>
    <a-marker preset="hiro">
      <a-box position="0 0.5 0" material="color: #a876aa;"></a-box>
      <a-text value="You're Invited!" position="-1 1 0"></a-text>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
</template>
```

---

## DEPLOYMENT & CI/CD

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run test
    
    - name: Build
      run: npm run build
      env:
        VITE_FIREBASE_API_KEY: ${{ secrets.FIREBASE_API_KEY }}
        # Add other env variables
    
    - name: Deploy to Firebase Hosting
      uses: FirebaseExtended/action-hosting-deploy@v0
      with:
        repoToken: '${{ secrets.GITHUB_TOKEN }}'
        firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
        channelId: live
```

---

## TESTING STRATEGY

```javascript
// tests/unit/components/OrderForm.spec.js
import { mount } from '@vue/test-utils';
import OrderForm from '@/components/OrderForm.vue';

describe('OrderForm.vue', () => {
  it('renders form fields', () => {
    const wrapper = mount(OrderForm);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
  });
  
  it('submits form with valid data', async () => {
    const wrapper = mount(OrderForm);
    await wrapper.find('input[type="text"]').setValue('John Doe');
    await wrapper.find('input[type="email"]').setValue('john@example.com');
    await wrapper.find('form').trigger('submit');
    
    // Assert submission logic
  });
});
```

---

## SECURITY CHECKLIST

- [ ] Environment variables for all secrets (never commit .env)
- [ ] Firebase Security Rules properly configured
- [ ] Input validation on client AND server
- [ ] SQL injection prevention (use parameterized queries)
- [ ] XSS prevention (Vue handles this mostly, but sanitize user HTML)
- [ ] CSRF protection
- [ ] Rate limiting on API endpoints
- [ ] HTTPS only
- [ ] Secure payment handling (PCI DSS compliance via Razorpay)
- [ ] User data encryption at rest
- [ ] Regular security audits
- [ ] Dependency vulnerability scanning (npm audit)

---

## PERFORMANCE OPTIMIZATION

- [ ] Lazy loading routes
- [ ] Image optimization (WebP, compression)
- [ ] Code splitting
- [ ] CDN for static assets
- [ ] Caching strategy (service workers)
- [ ] Database indexing
- [ ] Pagination for large data sets
- [ ] Debounce search/filter operations
- [ ] Bundle size analysis and optimization
- [ ] Lighthouse score > 90

---

## MONITORING & ANALYTICS

- [ ] Google Analytics
- [ ] Firebase Analytics
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring (Firebase Performance)
- [ ] User behavior tracking (Hotjar/Mixpanel)
- [ ] Server uptime monitoring (Pingdom/UptimeRobot)
- [ ] Log aggregation (Logtail)

---

## NEXT STEPS

### This Week (Technical)
1. Fix typos in current codebase
2. Add meta tags for SEO
3. Install Google Analytics
4. Create pricing and portfolio pages
5. Add WhatsApp float button

### Next Month
6. Set up Firebase project
7. Create new Vite + Vue 3 project
8. Implement authentication
9. Build customer dashboard MVP
10. Integrate Razorpay

### Quarter 1 (Next 3 Months)
11. Complete template builder
12. Admin dashboard
13. RSVP system
14. Order management workflow
15. Launch beta to first customers

**Focus:** Start small, iterate fast, listen to users, scale what works.
