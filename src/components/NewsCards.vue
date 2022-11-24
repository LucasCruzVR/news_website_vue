<template>
    
    <div class="column">
        <div class="large">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="" />
            <div class="bottom-left ">TAG</div>
            <div class="description">
                <h2>text</h2>
                <h4>subtext</h4>
                <div class="created">
                    <p>lucas</p>
                    <p>20/10/2022</p>
                </div>
                
            </div>
        </div>
        <div class="large">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="" />
            <div class="bottom-left ">TAG</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewsCards",
    components: {
    },
    data() {
        return {
            name: "#TAG"
        }
    }
}
</script>

<style lang="scss" scoped>
.bottom-left {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    padding: 0.2rem 0.5rem;
    background: #1c2620;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.column {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    padding: 0 rem;
    justify-content: center;
}
.large {
    position: relative;
    margin-bottom: 1rem;
    display: flex;
    width: 100%;
    height: 200px;
}

.description {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    h2 {
        font-weight: bold;
    }
    .created{
        margin-top: auto;
        p {
            font-size: 12px;
            margin: 0;
            //align-self: flex-end;
            
        }
    }
    
}

img {
    width: 40%;
}
</style>