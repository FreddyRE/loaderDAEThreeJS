var response = {}


function getAllKeysWithMaterials() {

    let obj = window[window["interface"].debug_name]
    let debName = interface.debug_name

    var index1 = 0
    var index2 = 0
    if (obj.type == "Group") {

        (obj.children).forEach(element => {
            if (element.type == "Mesh") {
                let newPath = `${debName}.children[${index1}].material`
                let namePath = element.name
                response[namePath] = newPath

            } else {
                element.children.forEach(element2 => {
                    if (element2.type == "Mesh") {
                        let newPath2 = `${debName}.children[${index1}].children[${index2}].material`
                        let namePath2 = element2.name
                        response[namePath2] = newPath2
                    } else {
                        console.log(" mas to drillDown revisar")
                    }
                    index2++
                })

            }
            index1++;

        });
    } else {
        console.log("nivel1 revisar OBJ")
    }

    console.log(response)
}