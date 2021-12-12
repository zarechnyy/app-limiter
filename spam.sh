for i in {1..10}; do
    echo "Request number is ${i}; request result:"
    curl http://localhost:3001/api/random
    echo ""
done

