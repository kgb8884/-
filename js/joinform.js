function test1() {
    console.log('함수호출');
    var ele = document.getElementById('id1').value;
    var domainValue = document.getElementById('domain');
    domainValue.value = ele;
    // 위에 두줄과 같은 기능
    document.getElementById('domain').value = ele;
}

