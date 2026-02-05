import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Sample product data
const products = [
    { id: 1, name: 'Frozen Mixed Berries', price: 8.50, stock: 120, category: 'Frozen' },
    { id: 2, name: 'Almond Milk (Unsweetened)', price: 3.90, stock: 80, category: 'Drinks' },
    { id: 3, name: 'Protein Bars (Chocolate)', price: 2.50, stock: 300, category: 'Snacks' },
    { id: 4, name: 'Sparkling Water Case', price: 14.00, stock: 60, category: 'Drinks' },
    { id: 5, name: 'Cheddar Cheese Block', price: 9.00, stock: 45, category: 'Fresh' },
    { id: 6, name: 'Banana', price: 1.20, stock: 400, category: 'Fresh' },
    { id: 7, name: 'Orange Juice', price: 4.50, stock: 60, category: 'Drinks' },
    { id: 8, name: 'Ground Beef', price: 12.00, stock: 35, category: 'Meat' },
    { id: 9, name: 'Chicken Breast', price: 15.00, stock: 50, category: 'Meat' },
]

type Category = 'All' | 'Drinks' | 'Snacks' | 'Fresh' | 'Meat' | 'Frozen'

export default function DashboardScreen() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('All')
    const [orderTotal, setOrderTotal] = useState(0)
    const [orderCount, setOrderCount] = useState(0)

    const categories: { name: Category; icon: string }[] = [
        { name: 'All', icon: 'apps' },
        { name: 'Drinks', icon: 'water' },
        { name: 'Snacks', icon: 'fast-food' },
        { name: 'Fresh', icon: 'leaf' },
        { name: 'Meat', icon: 'restaurant' },
        { name: 'Frozen', icon: 'snow' },
    ]

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory)

    const handleAddToOrder = (product: typeof products[0]) => {
        setOrderTotal(prev => prev + product.price)
        setOrderCount(prev => prev + 1)
    }

    return (
        <View style={styles.container}>
            {/* Sidebar */}
            <View style={styles.sidebar}>
                <View style={styles.sidebarHeader}>
                    <Image source={require('../assets/logo_one.png')} style={styles.sidebarLogo} />
                </View>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.name}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category.name && styles.categoryButtonActive
                        ]}
                        onPress={() => setSelectedCategory(category.name)}
                    >
                        <Ionicons
                            name={category.icon as any}
                            size={24}
                            color={selectedCategory === category.name ? '#E5A913' : '#94A3B8'}
                        />
                        <Text style={[
                            styles.categoryText,
                            selectedCategory === category.name && styles.categoryTextActive
                        ]}>
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Main Content */}
            <View style={styles.mainContent}>
                {/* Top Banner */}
                <View style={styles.topBanner}>
                    <View style={styles.bannerItem}>
                        <Text style={styles.bannerBadge}>FREESHIP</Text>
                        <Text style={styles.bannerText}>Free Ship</Text>
                        <Text style={styles.bannerSubtext}>Free shipping on orders over $500</Text>
                    </View>
                    <View style={styles.bannerDivider} />
                    <View style={styles.bannerItem}>
                        <Ionicons name="flash" size={16} color="#E5A913" />
                        <Text style={styles.bannerText}>Flash Sale: Dairy products expiring soon</Text>
                    </View>
                    <View style={styles.bannerDivider} />
                    <View style={styles.bannerItem}>
                        <Text style={styles.bannerBadge}>DAIRY30</Text>
                        <Text style={styles.bannerText}>80% OFF</Text>
                    </View>
                    <View style={styles.bannerDivider} />
                    <View style={styles.bannerItem}>
                        <Ionicons name="flash" size={16} color="#E5A913" />
                        <Text style={styles.bannerText}>Bulk Order Specials: 15% off orders over $1000</Text>
                    </View>
                </View>

                {/* Product Grid */}
                <ScrollView style={styles.productScroll} contentContainerStyle={styles.productGrid}>
                    {filteredProducts.map((product) => (
                        <View key={product.id} style={styles.productCard}>
                            <View style={styles.productImageContainer}>
                                <Ionicons name="cube-outline" size={50} color="#CBD5E1" />
                            </View>
                            <View style={styles.productInfo}>
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                                <Text style={styles.productStock}>{product.stock} in stock</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => handleAddToOrder(product)}
                            >
                                <Ionicons name="add" size={16} color="white" />
                                <Text style={styles.addButtonText}>Add to Order</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                {/* Order Footer */}
                <View style={styles.orderFooter}>
                    <View style={styles.orderInfo}>
                        <Text style={styles.orderLabel}>Order Total</Text>
                        <Text style={styles.orderTotal}>${orderTotal.toFixed(2)}</Text>
                        <Text style={styles.orderCount}>({orderCount} units)</Text>
                    </View>
                    <TouchableOpacity style={styles.reviewButton}>
                        <Text style={styles.reviewButtonText}>Review Order</Text>
                        <Ionicons name="arrow-forward" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F8FAFC',
    },
    sidebar: {
        width: 80,
        backgroundColor: '#14304A',
        paddingTop: 50,
        paddingBottom: 20,
    },
    sidebarHeader: {
        alignItems: 'center',
        marginBottom: 30,
    },
    sidebarLogo: {
        width: 40,
        height: 40,
    },
    categoryButton: {
        alignItems: 'center',
        paddingVertical: 16,
        borderLeftWidth: 3,
        borderLeftColor: 'transparent',
    },
    categoryButtonActive: {
        borderLeftColor: '#E5A913',
        backgroundColor: '#1E4A6A',
    },
    categoryText: {
        color: '#94A3B8',
        fontSize: 10,
        marginTop: 4,
        fontWeight: '600',
    },
    categoryTextActive: {
        color: '#E5A913',
    },
    mainContent: {
        flex: 1,
    },
    topBanner: {
        backgroundColor: '#14304A',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 12,
        alignItems: 'center',
    },
    bannerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    bannerBadge: {
        backgroundColor: '#E5A913',
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    bannerText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
    },
    bannerSubtext: {
        color: '#94A3B8',
        fontSize: 10,
    },
    bannerDivider: {
        width: 1,
        height: 20,
        backgroundColor: '#334155',
        marginHorizontal: 16,
    },
    productScroll: {
        flex: 1,
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        gap: 20,
    },
    productCard: {
        width: 150,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    productImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        marginBottom: 8,
    },
    productInfo: {
        marginBottom: 8,
        flex: 1,
    },
    productName: {
        fontSize: 13,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 3,
    },
    productPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#14304A',
        marginBottom: 2,
    },
    productStock: {
        fontSize: 10,
        color: '#64748B',
    },
    addButton: {
        backgroundColor: '#14304A',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
        gap: 4,
    },
    addButtonText: {
        color: 'white',
        fontSize: 11,
        fontWeight: '600',
    },
    orderFooter: {
        backgroundColor: '#14304A',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    orderInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    orderLabel: {
        color: '#94A3B8',
        fontSize: 12,
    },
    orderTotal: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    orderCount: {
        color: '#64748B',
        fontSize: 11,
    },
    reviewButton: {
        backgroundColor: '#E5A913',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        gap: 6,
    },
    reviewButtonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
})
