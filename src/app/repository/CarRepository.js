class CarRepository {
    create(payload) {
        return CarSchema.create(payload); //Schema pct mongoose
    }
}