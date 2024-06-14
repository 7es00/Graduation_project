<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use \App\Models\Certificate;
use App\Models\Stack;

class CertificateController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Certificate';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Certificate());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('image', __('Image'));
        $grid->column('link', __('Link'));
        $grid->column('stack_id', __('Stack id'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Certificate::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('image', __('Image'));
        $show->field('link', __('Link'));
        $show->field('stack_id', __('Stack id'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Certificate());

        $form->text('name', __('Name'));
        $form->text('image', __('Image'));
        $form->url('link', __('Link'));
        $form->select('stack_id', __('Stack id'))->options(Stack::all()->pluck('name', 'id'));

        return $form;
    }
}
