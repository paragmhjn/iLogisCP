/**
 * Created by ispldev on 01/08/2018.
 */

angular.module('app.import')
    .controller('importController', function (DTOptionsBuilder, DTColumnBuilder) {


        this.standardOptions = DTOptionsBuilder
            .fromSource('api/tables/datatables.standard.json')
             //Add Bootstrap compatibility
            .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>t" +
                        "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
            .withBootstrap();

        this.standardColumns = [

            DTColumnBuilder.newColumn('ID').withClass('text-danger'),
            DTColumnBuilder.newColumn('Container No.'),
            DTColumnBuilder.newColumn('Importer'),
            DTColumnBuilder.newColumn('Size'),
            DTColumnBuilder.newColumn('Type'),
            DTColumnBuilder.newColumn('Line'),
            DTColumnBuilder.newColumn('Status'),
            DTColumnBuilder.newColumn('Mode Of Delivery'),
            DTColumnBuilder.newColumn('Line Seal'),
            DTColumnBuilder.newColumn('Customer Seal'),
            DTColumnBuilder.newColumn('DEC NOP'),
            DTColumnBuilder.newColumn('DEC WT'),
            DTColumnBuilder.newColumn('Port Gate Out'),
            DTColumnBuilder.newColumn('Gate in Date'),
            DTColumnBuilder.newColumn('Seal Cut Date'),
            DTColumnBuilder.newColumn('Examined'),
            DTColumnBuilder.newColumn('COOC Date'),
            DTColumnBuilder.newColumn('DEL NOP'),
            DTColumnBuilder.newColumn('DEL WT')
        ];




    });