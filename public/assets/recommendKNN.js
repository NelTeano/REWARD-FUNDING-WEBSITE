// Convert product data to vectors
function productToVector(product) {
    return [
        product.price,
        product.organization_owner.length,
        product.description.length,
        product.catergory.length,
        product.variation.length
    ];
}

// Calculate cosine similarity between two vectors
function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((acc, val, idx) => acc + val * vecB[idx], 0);
    const normA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
    const normB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
    return dotProduct / (normA * normB);
}


// Find k-nearest neighbors
function findKNN(likedVectors, productVectors, k, products) {
    const similarities = productVectors.map((vector, idx) => {
        const maxSim = likedVectors.reduce((max, likedVec) => {
            const sim = cosineSimilarity(vector, likedVec);
            return Math.max(max, sim);
        }, 0);
        return { idx, similarity: maxSim };
    });

    similarities.sort((a, b) => b.similarity - a.similarity);
    return similarities.slice(0, k).map(sim => products[sim.idx]);
}

const RecommendationAlgorithm = (productsLiked, allProducts, k) => {    
    const productVectors = allProducts.map(product => productToVector(product));
    const likedProductVectors = productsLiked.slice(0, 5).map(product => productToVector(product)); // Consider up to 5 liked products

    const recommendations = findKNN(likedProductVectors, productVectors, k, allProducts);


    return recommendations;
}


export { findKNN, productToVector, RecommendationAlgorithm}